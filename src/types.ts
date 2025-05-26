export type Author = {
    avatarUrl: string
    createdAt: string
    email: string
    fullName: string
    passwordHash: string
    updatedAt: string
    __v: number
    _id: string
}

export type Tags = string[]

export type Post = {
    createdAt: string
    imageUrl: string | undefined
    tags: Tags
    text: string
    title: string
    author: Author
    updatedAt: string
    viewsCount: number
    __v: number
    _id: string
}
