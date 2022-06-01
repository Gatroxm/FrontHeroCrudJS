import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CreateHero } from '../components/heros/CreateHero';
import { EditHero } from '../components/heros/EditHero';
import { ListHero } from '../components/heros/ListHero';
import { ViewHero } from '../components/heros/ViewHero';

/* Rutar publicas*/
import { Index } from '../pages/home/Index';

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/heros/list" element={ <ListHero /> } />
            <Route path="/heros/create" element={ <CreateHero /> } />
            <Route path="/heros/edit/:id" element={ <EditHero /> } />
            <Route path="/heros/view/:id" element={ <ViewHero /> } />
            <Route path="*" element={ <Index /> } />
        </Routes>
      </BrowserRouter>
  )
}