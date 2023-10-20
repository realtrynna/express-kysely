import { LogTable } from "../tables/log.table";

/**
 * typia를 사용할 경우 interface로 dto validation 가능
 * Dto를 inteface로 만들어 Table 클래스를 확장 => 코드 재사용성
 */
export interface CreateLogDto extends Pick<LogTable, "idx"> {}