import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam suscipit quos repellendus qui velit fugit, doloremque animi a corporis labore hic vel voluptatum incidunt tenetur sed nisi debitis molestiae!"
          />
          
          <Post
            author="Luiz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam suscipit quos repellendus qui velit fugit, doloremque animi a corporis labore hic vel voluptatum incidunt tenetur sed nisi debitis molestiae!"
          />
        </main>
      </div>
    </div>
  );
}