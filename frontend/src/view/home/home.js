import React from 'react';
import styled from 'styled-components';
import Section from '../../components/home/section'

const Layout = styled.div`
display: flex;
margin: 4%;
flex-direction: column;
gap: 20px;
width:100%;
margin-left: 20px;
`

export default function Home() {
    return (
        <Layout>
        <Section number="1" />
        <Section number="2" />
        <Section number="3" />
        </Layout>
    )
}