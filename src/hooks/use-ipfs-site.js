import useIpfs from './use-ipfs';
import { useEffect, useState } from 'react';
import all from 'it-all';

function useIpfsSite(ipfsHash) {
  const ipfs = useIpfs();
  const [site, setSite] = useState();

  useEffect(() => {
    if(ipfs) {
      getSite(ipfsHash, ipfs, setSite);
    }
  }, [ipfs, ipfsHash]);

  return site;
}

async function getSite(ipfsHash, ipfs, setSite) {
  console.log('getting site', ipfsHash)
  console.time('Get site')
  const data = Buffer.concat(await all(ipfs.cat(ipfsHash)))
  console.timeEnd('Get site')

  setSite(data.toString());
}

export default useIpfsSite;