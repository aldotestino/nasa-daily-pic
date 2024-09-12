import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPictureData } from '@/server/query';
import Image from 'next/image';

async function Home({ searchParams }: { searchParams: { date: string } }) {

  const data = await getPictureData(searchParams.date);

  return (
    <main className='bg-muted py-10'>
      <div className='max-w-screen-md mx-auto px-4 md:px-0 space-y-4'>
        <div className='relative aspect-video w-full overflow-hidden shadow-sm rounded-lg'>
          {data.media_type === 'image' ? 
            <Image
              src={data.url}
              alt={data.title}
              quality={85}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 ease-in-out"
            /> : 
            <iframe 
              className='w-full h-full'
              title={data.title}
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={data.url}>
            </iframe>
          }
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            {data.copyright && <CardDescription>{data.copyright}</CardDescription>}
          </CardHeader>
          <CardContent>
            <p className='prose w-full'>{data.explanation}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Home;