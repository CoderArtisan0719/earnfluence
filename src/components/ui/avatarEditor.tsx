'use client'
import React, { useState, useCallback, useEffect } from 'react';
import crypto from 'crypto';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useMutation } from 'convex/react';
import { Input } from './input';

import { api } from '../../../convex/_generated/api';
import type { Id } from '../../../convex/_generated/dataModel';
import type { UserTableType } from '@/utils/types';
import { toast } from 'react-toastify';

export const getGravatarUrl = (email: string) => {
	const trimmedEmail = email.trim().toLowerCase();
	const hash = crypto.createHash('md5').update(trimmedEmail).digest('hex');
	return `https://www.gravatar.com/avatar/${hash}`;
};

const AvatarEditor = () => {
	const [isLoading, setIsLoading] = useState(false);
	const email = "geekydev0125@example.com";
	const router = useRouter()
	const [user, setUser] = useState<UserTableType>();
	const [editFlg, setEditFlg] = useState(false);
	const [gAvatar, setGAvatar] = useState<string>("");
	const [photo, setPhoto] = useState<File | undefined>();
	const generateUploadUrl = useMutation(api.files.generateUploadUrl);
	const uploadPhotoMutation = useMutation(api.user.photo);

	const baseUrl = process.env.SITE_URL || 'https://dashing-scorpion-761.convex.site';

	useEffect(() => {
		const userInfo = localStorage.getItem('user');

		if (!userInfo) router.push('/');
		else {
			const parsedUserInfo = JSON.parse(userInfo);
			console.log(parsedUserInfo);
			setUser(parsedUserInfo);
			if (parsedUserInfo.avatar) {
				const getPhotoUrl = new URL(`${baseUrl}/getFile`);
				getPhotoUrl.searchParams.set('storageId', parsedUserInfo.avatar as string);
				setGAvatar(getPhotoUrl.href)
			} else {
				setGAvatar(getGravatarUrl(email))
			}
		}
	}, []);


	const handleUploadPhoto = useCallback(async () => {
		if (!photo) {
			toast("Please select a photo");
			return;
		}
		setIsLoading(true);
		const postUrl = await generateUploadUrl();
		const result = await fetch(postUrl, {
			method: 'POST',
			headers: { 'Content-Type': photo?.type ?? '' },
			body: photo,
		});
		const { storageId } = await result.json();
		const data = await uploadPhotoMutation({
			userId: user!._id as Id<'users'>,
			photo: storageId as Id<'_storage'>,
		});

		
		const getPhotoUrl = new URL(`${baseUrl}/getFile`);
		getPhotoUrl.searchParams.set('storageId', data.avatar as string);

		setGAvatar(getPhotoUrl.href)

		localStorage.setItem('user', JSON.stringify(data));
		setIsLoading(false)
		toast("Uploaded your new avatar!");
	}, [photo]);

	useEffect(() => {
		console.log("gAvatar", gAvatar)
	}, [gAvatar])

	return (
		<div className="flex flex-col items-center mt-[30px]">
			<Image
				src={gAvatar}
				alt="gavatar"
				width={100}
				height={100}
				className="w-[150px] h-[150px] rounded-full"
			/>

			<button className='mt-[10px] text-[#45FFFF]' onClick={(() => setEditFlg(!editFlg))}>
				{
					editFlg ? "Cancel" : "Edit avatar"
				}
			</button>
			{
				isLoading && (
					<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				)
			}
			{
				editFlg && (
					<React.Fragment>
						<Input
							type="file"
							accept="image/*"
							placeholder="Photo"
							className="w-[300px] mt-[30px] cursor-pointer border border-slate-500"
							onChange={(e) => setPhoto(e.target.files?.[0])}
						/>
						<button onClick={handleUploadPhoto}>Change Photo</button>
					</React.Fragment>
				)
			}
		</div>
	)
}

export default AvatarEditor;