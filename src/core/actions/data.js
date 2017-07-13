import { DATA_LOADED } from './constants'

export function dataLoaded(data) {
  return {
    type: DATA_LOADED,
    data
  };
}
