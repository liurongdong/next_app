import Image from 'next/image'



async function getData() {
    const res = await fetch("https://www.web3event.org/web3event/api/v1/asterisk/query")
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);

    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

    return res.json()
}


export default async function Home() {
    let data = await getData()
    console.log(data);
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello</div>
    </main>
  )
}
