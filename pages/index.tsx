import { VStack, Divider, Spacer } from '@chakra-ui/react';
import Header from '../components/Header';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { NasaPOTD } from '../utils/types';
import POTD from '../components/POTD';
import { NASA_API_URL } from '../utils/constants';
import { formatDate } from '../utils';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home({ nasaPOTD, prevDate, nextDate }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>{nasaPOTD.title} - Nasa POTD</title>
      </Head>
      <VStack align="start" p={4} spacing={4} minH="100vh">
        <Header />
        <POTD {...nasaPOTD} />
        <Spacer />
        <Divider />
        <Footer prevDate={prevDate} nextDate={nextDate} />
      </VStack>
    </>
  );
}

interface GetServerSidePropsI {
  nasaPOTD: NasaPOTD
  nextDate: string
  prevDate: string
}

export const getServerSideProps: GetServerSideProps<GetServerSidePropsI> = async ({ query }) => {

  const date = query.date;

  const params = new URLSearchParams();
  params.append('api_key', process.env.NASA_API_KEY!);
  if(date && typeof date == 'string') {
    params.append('date', date);
  }

  const res = await fetch(`${NASA_API_URL}?${params.toString()}`);
  const data = await res.json();

  const today = new Date();
  const todayDate = formatDate(today);

  let nextDate: string, prevDate: string;
  
  if(todayDate !== data.date) {
    const tomorrow = new Date(data.date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextDate = formatDate(tomorrow);
  }else {
    nextDate = '';
  }

  const yesterday = new Date(data.date);
  yesterday.setDate(yesterday.getDate() - 1);
  prevDate = formatDate(yesterday);

  return {
    props: {
      nasaPOTD: {
        date: data.date,
        title: data.title,
        explanation: data.explanation,
        url: data.hdurl || data.url,
        isVideo: data.media_type === 'video'
      },
      prevDate,
      nextDate
    }
  };
};
