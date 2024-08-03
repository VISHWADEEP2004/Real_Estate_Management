import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { ModeToggle } from '../ModeToggle';

const AgentTopbar = () => {
  return (
    <div className='bg-white sticky top-0 left-0 h-[8vh] flex justify-between items-center px-4 font-sans font-bold border border-b-2 rounded-lg shadow-md dark:bg-slate-950'>
      <div className='flex items-center gap-8'>
        <div className='text-xl font-bold'>Agent Dashboard</div>
      </div>
      <div className='flex items-center gap-8'>
        <Avatar>
          <AvatarImage src="https://github.com/sh/adcn.png" alt="@shadcn" />
          <AvatarFallback className='text-violet-900'>AG</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
};

export default AgentTopbar;
