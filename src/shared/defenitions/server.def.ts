// eslint-disable-next-line unicorn/prevent-abbreviations
import { QueryAggregateEnum, ServerTypeEnum } from '../enums';

export type ServerType =
  | ServerTypeEnum.MYSQL2
  | ServerTypeEnum.MYSQL
  | ServerTypeEnum.MSSQL
  | ServerTypeEnum.ORACEL
  | ServerTypeEnum.POSTGRES
  | ServerTypeEnum.BETTER_SQLITE
  | ServerTypeEnum.SQLITE;

export type TablesListRow = Record<string, any> & {
  table_name: string;
};

export type TableInfoRow = {
  name: string;
  table: string;
  data_type: string;
  default_value?: string;
  max_length?: number;
  numeric_precision?: number;
  numeric_scale?: number;
  is_nullable: boolean;
  is_unique: boolean;
  is_primary_key: boolean;
  is_generated: boolean;
  generation_expression?: string;
  has_auto_increment: boolean;
  foreign_key_table?: string;
  foreign_key_column?: string;
  comment?: string;
  schema?: string;
  foreign_key_schema?: string;
};

export type QueryOrder = {
  column: string;
  order: 'asc' | 'desc';
};

export type QueryJoin = {
  table: string;
  on: {
    local: string;
    target: string;
    opr: string;
  };
};

export type QueryWhere = {
  column: string;
  opr: string;
  value: string | number;
  or: boolean;
};

export type ReadDataResult<T> = {
  data: T[];
  count: number;
};

export type ReadWidgetDataResult<T> = {
  data: T[] | T;
};

export type QueryAggregate =
  | QueryAggregateEnum.AVG
  | QueryAggregateEnum.AVG_DISTINCT
  | QueryAggregateEnum.COUNT
  | QueryAggregateEnum.COUNT_DISTINCT
  | QueryAggregateEnum.MAX
  | QueryAggregateEnum.MIN
  | QueryAggregateEnum.MIN
  | QueryAggregateEnum.SUM
  | QueryAggregateEnum.SUM_DISTINCT;

export type ServerConnectionConfig = {
  host: string;
  port: number;
  user: string;
  password?: string;
  database: string;
};

export type FileConnectionConfig = {
  filename: string;
};

export type ConnectionConfig = ServerConnectionConfig | FileConnectionConfig;

export type ReadDataArgs = {
  table: string;
  columns: string[];
  limit: number;
  offset: number;
  searchColumns?: string[];
  searchText?: string;
  where?: QueryWhere[];
  join?: QueryJoin[];
  order?: QueryOrder;
  filter?: any;
};

export type UpdateDataArgs = {
  table: string;
  update: Record<string, any>;
  where?: QueryWhere[];
};

export type DeleteDataArgs = {
  table: string;
  where?: QueryWhere[];
};

export type InsertDataArgs = {
  table: string;
  data: Record<string, any> | Record<string, any>[];
};

export type DeleteDataArgs = {
  table: string;
  where?: QueryWhere[];
};

export type ReadWidgetDataArgs = {
  table: string;
  column: string;
  func: QueryAggregate;
  where?: QueryWhere[];
};

export type ConnectArgs = {
  client: ServerType;
  connection: ConnectionConfig;
};

export type ArgsType =
  | ConnectArgs
  | ReadWidgetDataArgs
  | DeleteDataArgs
  | InsertDataArgs
  | UpdateDataArgs
  | ReadDataArgs;
