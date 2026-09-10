import { apiClient } from '~/services/httpClient'
import type { ResortData } from '~/types'

export const resortService = {
  async getResortData(): Promise<ResortData> {
    const { data } = await apiClient.get<ResortData>('/resort')
    return data
  },
}
