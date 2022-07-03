import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
background: #fff;
padding: 2em;
    box-shadow: 4px 1px 6px rgb(0 0 0 / 20%);
    
border-radius: 10px;
    height: 10rem;
    display: flex;
    flex-direction: row;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Title = styled.li`
content: "•"; 
text-transform: uppercase;
font-size: 1.4em;
`

const Desc = styled.div`
font-size: 0.8em;
height: 100%;
`


const Content = styled.div`

`

const Image = styled.img`
    width: 50px;
    height: 50px;
`

export default function Selection({number}) {
    return (
        <Section>
            <Image src='https://cdn-icons-png.flaticon.com/512/7233/7233521.png' />
            <Content>  
            <Title>Sekcja {number}</Title>
            <Desc>
                Wiadomość
            </Desc>
            </Content>
        </Section>
    )
}