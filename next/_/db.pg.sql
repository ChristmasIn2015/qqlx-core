SELECT
    "pond_log"."type" AS "pond_log_type",
    "pond_log"."title" AS "pond_log_title",
    "pond_log"."text" AS "pond_log_text",
    "pond_log"."duration" AS "pond_log_duration",
    "pond_log"."id" AS "pond_log_id",
    "pond_log"."isDisabled" AS "pond_log_isDisabled",
    "pond_log"."timeCreate" AS "pond_log_timeCreate",
    "pond_log"."timeUpdate" AS "pond_log_timeUpdate"
FROM "pond_log" "pond_log"
WHERE
    "pond_log"."title" IN ($1, $2)
    AND "pond_log"."text" IN ($3, $4) ['ebe622',
    '3-580ade',
    'ebe622',
    '3-580ade']