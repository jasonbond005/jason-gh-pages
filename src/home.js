import PostsComponent from './postsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState,useEffect } from 'react';
import loader from './logo.svg';
import AlertComponent from './AlertComponent';
import CarouselComponent from './carouselComponent';
import {React} from 'react';
import useFetch from './useFetch';
// import UserContext from './UserContext';
import { useContext } from 'react';
import { ThemeContext } from '.';
import './index.css';


const HomeComponent = () => {
    
    const {data:posts, isPending, error}=useFetch('')
    
    const [theme, toggleTheme] = useContext(ThemeContext)
    
    return (
        <div style={{ background: theme.background, color: theme.foreground }}>            
            
            <CarouselComponent/>
            {error && <AlertComponent props={error}/>}
            
            
            {isPending && <div><img className='navlogocenter' src={loader} width='200' alt='preloader'/></div>}
            {posts && < PostsComponent posts = {posts}/>}
            
        </div>
    );
}

export default HomeComponent;