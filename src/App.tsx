import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LuizPelegrini.png',
      name: 'Luiz Pelegrini',
      role: 'Fullstack Dev. @BFM 89.9'
    },
    content: [
      { type: 'paragraph', content: 'Hi folks 👋'},
      { type: 'paragraph', content: 'I\'ve just finished pushing another project to my portfolio. It\'s called DoctorCare 🚀. Feel free to check it out and drop a comment down below!'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-07 22:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/derrickmehaffy.png',
      name: 'Derrick',
      role: 'Solutions Engineer @Strapi'
    },
    content: [
      { type: 'paragraph', content: 'To infinity and beyond! 🚀'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam suscipit quos repellendus qui velit fugit, doloremque animi a corporis labore hic vel voluptatum incidunt tenetur sed nisi debitis molestiae!'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-02 16:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}