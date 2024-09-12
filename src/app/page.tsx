import { getPictureData } from '@/server/query';
import Image from 'next/image';

async function Home({ searchParams }: {searchParams: {date: string}}) {

  const data = await getPictureData(searchParams.date);

  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Home;