import * as React from 'react';
import {BlockProps} from '../..';
export interface ImgurState {
  height: number;
}
declare class Imgur extends React.Component<BlockProps, ImgurState> {
  state: ImgurState;
  mounted: boolean;
  componentDidMount(): void;
  componentWillUnmount(): void;
  onMessage: ({data}: {data: any}) => void;
  src(): string;
  render(): React.ReactElement<
    any,
    | string
    | ((
        props: any,
      ) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null)
    | (new (props: any) => React.Component<any, any, any>)
  > | null;
}
export default Imgur;
