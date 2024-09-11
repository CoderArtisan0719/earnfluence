'use client';

import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from 'convex/react';
import DashboardSidebar from "@/components/ui/dashboard-sidebar";
import KPICard from "@/components/cards/KPICard";
import KPICardLoading from "@/components/loading/KPICardLoading";
import { KPIType, RequestTableType } from "@/types";
import { api } from "../../../convex/_generated/api";
import type { Id } from '../../../convex/_generated/dataModel';

const Influencer = () => {
  const [loading, setLoading] = useState(false);
  const [vendorKPI, setVendorKPI] = useState<KPIType[]>([]);
  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState<string>(filter);
  const [total, setTotal] = useState(0);
  const [bidTotal, setBidTotal] = useState(1);
  const [reqTotal, setReqTotal] = useState(1);

  const reqMutation = useMutation(api.requests.getAvailable);
  const myBidMutation = useMutation(api.bids.getByVendorId);
  const [page, setPage] = useState(1);
  const [perpage, setPerpage] = useState(10);

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    const parsedUserInfo = JSON.parse(userInfo!);

    setLoading(true);

    reqMutation({
      filter: debouncedFilter,
      page: 0,
      perpage: 0,
    }).then((res: { resolvedRequests: RequestTableType[]; total: number }) => {
      myBidMutation({
        vendorId: parsedUserInfo._id as Id<'users'>,
        filter,
        page,
        perpage,
      }).then((bids) => {
        setLoading(false);
        setTotal(res.total);
        setReqTotal(res.total);
        setBidTotal(bids.total);

        setVendorKPI([
          {
            title: 'Bids',
            img: '/img/product.png',
            imgAlt: 'request',
            length: 'grid-cols-3',
            lists: [
              {
                label: 'placed',
                value: bids.bids.filter((bid: any) => bid.status === 'placed')
                  .length,
              },
              {
                label: 'accepted',
                value: bids.bids.filter((bid: any) => bid.status === 'accepted')
                  .length,
              },
              {
                label: 'rejected',
                value: bids.bids.filter((bid: any) => bid.status === 'rejected')
                  .length,
              },
            ],
          },
          {
            title: 'Requests available',
            img: '/img/product.png',
            imgAlt: 'request',
            length: '',
            lists: [{ label: 'total', value: res.total }],
          },
          {
            title: 'Requests',
            img: '/img/product.png',
            imgAlt: 'request',
            length: 'grid-cols-2',
            lists: [
              {
                label: 'active',
                value: res.resolvedRequests.filter(
                  (req) => req.status === 'active',
                ).length,
              },
              {
                label: 'in revision',
                value: res.resolvedRequests.filter(
                  (req) => req.status === 'revise',
                ).length,
              },
            ],
          },
        ]);
      });
    });
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-4 xl:grid-cols-6">
      <DashboardSidebar className="bg-transparent px-4 pt-12" />
      <div className="overflow-auto px-8 pt-16 lg:col-span-3 lg:h-screen xl:col-span-5">
        <div className="text-4xl font-bold">
          Dashboard
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <KPICardLoading loading={loading} />
          <KPICardLoading loading={loading} />
          {vendorKPI.map((KPI) => (
            <KPICard {...KPI} key={KPI.title} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Influencer;
