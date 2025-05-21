import Link from 'next/link'

export default function Home() {
  const components = ["LoginForm","ProductDetailPage"];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Generated App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((name) => (
          <Link
            key={name}
            href={`/${name.toLowerCase()}`}
            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">View the {name} component</p>
          </Link>
        ))}
      </div>
    </main>
  )
}