import Image from "next/image"

export default function SocialProof() {
  const posts = [
    {
      image: "/placeholder.svg?height=300&width=300",
      username: "@herbalaura_user1",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      username: "@herbalaura_user2",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      username: "@herbalaura_user3",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      username: "@herbalaura_user4",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Share Your Journey</h2>
        <p className="text-center mb-8">Tag @herbalaura to be featured</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post by ${post.username}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white font-medium">{post.username}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

