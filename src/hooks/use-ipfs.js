import React, { useEffect, useState } from 'react';
import ipfs from 'ipfs';


function useIpfs() {
  const [ipfs, setIpfs] = useState();
  useEffect(() => {
    if (!window.ipfs && !ipfs) {
      startIpfs(setIpfs);
    }
  }, [ipfs]);

  return ipfs;
}

async function startIpfs(setIpfs) {
  console.time('Create IPFS Node')
  window.ipfs = await ipfs.create();
  console.timeEnd('Create IPFS Node')
  setIpfs(window.ipfs);
}

export default useIpfs;