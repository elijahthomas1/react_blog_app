import React from 'react';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Footer = () => {
  const today = new Date();
  const { posts } = useContext(DataContext);
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {today.getFullYear()} ----  # of Posts:{posts.length}</p>
    </footer>
  )
}

export default Footer