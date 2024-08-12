import React from 'react'
import { useParams } from 'react-router-dom'
import AppLayout from '../../templates/app-layout';
import Header from './components/header';
import Content from './components/content';

export default function BlogDetail() {
    const { id } = useParams();

    return (
        <AppLayout>
            <Header />
            <Content />
        </AppLayout>
    )
}
