import * as React from 'react';
export interface ParsedUrl {
  url: string;
  hostname: string;
  pathname: string;
  search: string;
  hash: string;
}
export declare type EmbedBlockId = string;
export interface BlockProps extends ParsedUrl {
  id: EmbedBlockId;
  width: number;
  isDark: boolean;
  renderVoid: (error?: Error) => React.ReactElement<any> | null;
  renderWrap: ReactEmbedWrapRenderer;
}
export interface Blocks {
  [name: string]: React.ComponentType<BlockProps>;
}
export declare type ReactEmbedRouterResult = undefined | [undefined | React.ComponentType<BlockProps>, EmbedBlockId];
export declare type ReactEmbedRouter = (blocks: Blocks, url: ParsedUrl) => ReactEmbedRouterResult;
export declare type ReactEmbedRenderer = (
  block: React.ComponentType<BlockProps>,
  id: EmbedBlockId,
  props: ReactEmbedProps,
  state: ReactEmbedState,
) => React.ReactElement<any> | null;
export declare type ReactEmbedVoidRenderer = (
  props: ReactEmbedProps,
  state: ReactEmbedState,
  error?: Error,
) => React.ReactElement<any> | null;
export declare type ReactEmbedWrapRenderer = (
  children: React.ReactElement<any> | null,
) => React.ReactElement<any> | null;
export interface ReactEmbedProps {
  url: string;
  isDark?: boolean;
  width?: number;
  blocks?: Blocks;
  router?: ReactEmbedRouter;
  render?: ReactEmbedRenderer;
  fallback?: NonNullable<React.ReactNode> | null;
  renderVoid?: ReactEmbedVoidRenderer;
  renderWrap?: ReactEmbedWrapRenderer;
}
export interface ReactEmbedState {
  url?: ParsedUrl;
  error?: Error;
}
export declare class ReactEmbed extends React.PureComponent<ReactEmbedProps, ReactEmbedState> {
  static defaultProps: {
    width: number;
    isDark: boolean;
    blocks: Blocks;
    router: ReactEmbedRouter;
    render: ReactEmbedRenderer;
    renderVoid: () => null;
    renderWrap: (children: any) => any;
  };
  static getDerivedStateFromProps(
    props: any,
  ):
    | {
        url: {
          url: any;
          hostname: string;
          pathname: string;
          search: string;
          hash: string;
        };
        error?: undefined;
      }
    | {
        error: any;
        url?: undefined;
      }
    | null
    | undefined;
  static getDerivedStateFromError(
    error: any,
  ): {
    error: any;
  };
  state: ReactEmbedState;
  url: undefined | ParsedUrl;
  render(): React.ReactElement<
    any,
    | string
    | ((
        props: any,
      ) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null)
    | (new (props: any) => React.Component<any, any, any>)
  > | null;
}
export default ReactEmbed;
