import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

let arr = [1, 3, 5, 6, 10]


function FetchFIle() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState([1])
    const [idfromButtonClikc, setidfromButtonClick] = useState()


    // const getData = () =>   

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(
                res => {
                    console.log(res)
                    setPosts(res.data);
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
    }, [])

    const eventHandler = (e) => {
        setId(e.target.value)
    }
    const buttonEventHandler = () => {
        // setidfromButtonClick(id)



        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(
                res => {
                    console.log(res)
                    setPosts([res.data]);
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )

    }


    console.log(posts)
    return (
        <div>
            <h1>Search The Posts by entering the Post ID</h1>
            <br></br>
            <input value={id} type='text' onChange={eventHandler}></input>
            <br></br><br></br><br></br>
            <div>{posts[0]?.title}</div>
            <br></br><br></br>
            <button onClick={buttonEventHandler}>Fetch post</button>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchFIle
