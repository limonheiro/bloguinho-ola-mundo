import React from 'react'
import { useParams } from 'react-router-dom'
import posts from '../../../src/json/posts.json'
import PostModelo from '../PostModelo/'
import PostCard from '../PostCard'
import ReactMarkdown from 'react-markdown'
import styles from './Post.module.css'
import NaoEncontrado from '../../paginas/NaoEncontrado'
import PaginaPadrao from '../PaginaPadrao'
export default function Post() {
    
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === parseInt(parametros.id)
    })

    const postRecomendados = posts.filter((post)=>  post.id !== Number(parametros.id)).sort((a,b)=>b.id-a.id).slice(0,4)

    return (
        post ?
            <>
                <PaginaPadrao/>
                <PostModelo
                    FotoCapa={`/src/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >

                    <div className={styles.post_markdown_container}>

                        <ReactMarkdown children={post.texto} />
                    </div>
                </PostModelo>
                <h2 className={styles.tituloOutrosPosts}> Outros posts que você pode gostar: </h2>

                <ul className={styles.postsRecomendados}>
                    {postRecomendados.map((post)=><PostCard key={post.id} post={post}></PostCard>)}
                </ul>
            </> :
            <NaoEncontrado />
    )
}
