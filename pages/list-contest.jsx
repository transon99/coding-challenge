import { ListContestLayout } from '@/components/layout';
import { ContestItem, Filter } from '@/components/listContest';
import React from 'react';

function ListConstes() {
  return (
    <div className="flex">
      <div>
        <Filter />
      </div>
      <div>
        <ContestItem />
      </div>
    </div>
  );
}

ListConstes.Layout = ListContestLayout;

export default ListConstes;
