import { IncomingMessage, ServerResponse } from "http"

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify(
        [{
            "podcastName": "flow",
            "episode": "CBUM - Flow #319",
            "videoId": "pQSuQmUfS30",
            "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
            "Link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
            "categortes": ["saúde", "esporte", "bodybuilder"]
        },
        {
            "podcastName": "flow",
            "episode": "RUBENS BARRICHELLO - Flow #339",
            "videoId": "4KDGTdioV4I",
            "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
            "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
            "categories": ["esporte", "corrida"]
        }

        ])

    )


}