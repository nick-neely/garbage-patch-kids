declare module "react-game-engine" {
  import { Component, ReactNode } from "react";

  export interface GameEngineProps {
    systems?: Array<(entities: any, { touches, time, dispatch }: any) => any>;
    entities?: any;
    renderer?: (entities: any, screen: any) => void;
    timer?: any;
    running?: boolean;
    onEvent?: (e: any) => void;
    style?: object;
    className?: string;
    children?: ReactNode;
  }

  export interface GameEngineMethods {
    stop: () => void;
    start: () => void;
    swap: (newEntities: any) => void;
    dispatch: (event: any) => void;
  }

  export class GameEngine
    extends Component<GameEngineProps>
    implements GameEngineMethods
  {
    stop(): void;
    start(): void;
    swap(newEntities: any): void;
    dispatch(event: any): void;
  }
}
