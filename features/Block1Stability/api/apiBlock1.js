import { api } from "@/shared/api/api";
import { endpoints } from "@/shared/api/endpoints";
import { createApiConfig } from "@/shared/api/helper";

const OPERATIONS_TAG = [{ type: "RegOperators", id: "OPERATIONS" }];
const url = endpoints.path.stats;

const operationsApi = api.injectEndpoints({
	endpoints: (build) => ({
		getStats: build.query({
			query: () => {
				return createApiConfig("GET", url);
			},
			providesTags: () => OPERATIONS_TAG, 
		}),
	})
})

export const {
	useGetStatsQuery,
} = operationsApi;