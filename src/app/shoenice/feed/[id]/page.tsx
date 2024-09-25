import FunctionalVideoCarousel from '@/components/carousel/functionalVideoCarousel';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export interface FeedItem {
	id: string;
	title: string;
	content: string;
}

export const feedItems: FeedItem[] = [
	{ id: 'V54ozp33k', title: 'First Post', content: 'This is the first post content.' },
];

export async function generateStaticParams() {
	return feedItems.map((item) => ({
		id: item.id,
	}));
}

async function getFeedItem(id: string): Promise<FeedItem | undefined> {
	return feedItems.find(item => item.id === id);
}

const Cameo_svg = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="#F2F1F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-testid="icon-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

export default async function FeedItemPage({ params }: { params: { id: string } }) {
	const feedItem = await getFeedItem(params.id);

	if (!feedItem) {
		notFound();
	}

	return (
		<div className='min-h-full absolute top-0 left-0 w-full'>
			<div className='relative w-full h-[100vh]'>
				<div className='z-[-1] blur-3xl absolute w-full h-full top-0 left-0 bg-cover bg-center' style={{ backgroundImage: 'url("https://cdn.cameo.com/2022-06-21-thumbnails/shoenice.jpg")' }}></div>

				<Link href={"/"} className='absolute top-[20px] text-3xl left-[20px] cursor-pointer z-[200]'>cameo</Link>
				<Link href={"/shoenice"} className='absolute top-[25px] text-3xl right-[20px] cursor-pointer z-[200]'>
					<Cameo_svg />
				</Link>

				<div className='flex items-center justify-center h-full w-full'>
					<FunctionalVideoCarousel />
				</div>
			</div>
		</div>
	);
}