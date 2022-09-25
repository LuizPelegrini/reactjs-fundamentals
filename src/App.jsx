import { Post } from './components/Post';
import { Header } from './components/Header';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Luiz"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam suscipit quos repellendus qui velit fugit, doloremque animi a corporis labore hic vel voluptatum incidunt tenetur sed nisi debitis molestiae!"
      />
  
      <Post
        author="Guilherme"
        content="Another Post content"
      />
    </div>
  );
}