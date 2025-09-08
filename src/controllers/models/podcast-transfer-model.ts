import { PodcastModel } from "./pocast-model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
