import React, {useCallback, useEffect, useState} from 'react';
import {Image, ImageStyle} from 'react-native';
import RNFS from 'react-native-fs';
import md5 from 'md5';

type ImageProps = {
  uri: string;
  style: ImageStyle;
};

const CacheImage: React.FunctionComponent<ImageProps> = ({
  uri,
  ...otherProps
}) => {
  const [fileUri, setFileUri] = useState<string>('');

  const cacheFile = (
    fromUrl: string,
    toFile: string,
  ): Promise<RNFS.DownloadResult> => {
    return RNFS.downloadFile({
      fromUrl,
      toFile,
      background: true,
    }).promise;
  };

  const onMount = useCallback(async () => {
    const name = md5(uri);
    console.log('name', name);
    const path = `${RNFS.CachesDirectoryPath}/${name}`;
    console.log('path', path);
    const exists = await RNFS.exists(path);
    console.log('exists', exists);
    if (exists) {
      const file = path;
      console.log('file', file);
      setFileUri(file);
    } else {
      await cacheFile(uri, path);
      setFileUri(path);
    }
  }, [uri]);

  useEffect(() => {
    onMount();
  }, [onMount, uri]);

  return <Image {...otherProps} source={{uri: fileUri}} />;
};

export default CacheImage;
