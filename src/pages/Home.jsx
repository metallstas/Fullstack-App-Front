import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

import { Post } from '../components/Post'
import { TagsBlock } from '../components/TagsBlock'
import { CommentsBlock } from '../components/CommentsBlock'
import { useGetPostsQuery, useGetTagsQuery } from '../redux/postsApi'

export const Home = () => {
    const allPosts = useGetPostsQuery()
    const tags = useGetTagsQuery()

    !tags.isLoading ? console.log(tags.data) : console.log('xxxxx')

    return (
        <>
            <Tabs
                style={{ marginBottom: 15 }}
                value={0}
                aria-label="basic tabs example"
            >
                <Tab label="Новые" />
                <Tab label="Популярные" />
            </Tabs>
            <Grid container spacing={4}>
                <Grid size={8}>
                    {(allPosts.isLoading ? [...Array(5)] : allPosts.data).map(
                        (el, index) =>
                            allPosts.isLoading ? (
                                <Post key={index} isLoading={true} />
                            ) : (
                                <Post
                                    key={el._id}
                                    id={el._id}
                                    title={el.title}
                                    imageUrl="https://www.cfainstitute.org/sites/default/files/styles/coh_large/public/images/default-images/Image-placeholder.png"
                                    user={el.author}
                                    createdAt={el.createdAt}
                                    viewsCount={el.viewsCount}
                                    commentsCount={3}
                                    tags={el.tags}
                                    isEditable
                                    isLoading={allPosts.isLoading}
                                />
                            )
                    )}
                </Grid>
                <Grid size={4}>
                    <TagsBlock items={tags.data} isLoading={tags.isLoading} />
                    <CommentsBlock
                        items={[
                            {
                                user: {
                                    fullName: 'Вася Пупкин',
                                    avatarUrl:
                                        'https://mui.com/static/images/avatar/1.jpg',
                                },
                                text: 'Это тестовый комментарий',
                            },
                            {
                                user: {
                                    fullName: 'Иван Иванов',
                                    avatarUrl:
                                        'https://mui.com/static/images/avatar/2.jpg',
                                },
                                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
                            },
                        ]}
                        isLoading={false}
                    />
                </Grid>
            </Grid>
        </>
    )
}
