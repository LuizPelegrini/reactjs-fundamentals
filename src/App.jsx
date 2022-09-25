import { Post } from './components/Post';

export function App() {
  return (
    <div>
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