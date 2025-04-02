import React, { Component } from 'react'

export class NewsItem extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "High turnout as France votes in election that could usher in far right - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/europe/france-vote-election-that-could-put-far-right-government-2024-06-30/",
            "urlToImage": null,
            "publishedAt": "2024-06-30T15:25:20Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Rebecca Rubin",
            "title": "Box Office: ‘A Quiet Place: Day One’ Scores Franchise-Best $53 Million Debut, Kevin Costner’s ‘Horizon’ Misfires With $11 Million - Variety",
            "description": "”A Quiet Place Day One” scored $53 million in its debut.",
            "url": "https://variety.com/2024/film/box-office/box-office-a-quiet-place-day-scores-kevin-costner-horizon-misfires-1236057461/",
            "urlToImage": "https://variety.com/wp-content/uploads/2024/06/Quiet-Place-2.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2024-06-30T15:05:00Z",
            "content": "“A Quiet Place: Day One” is making noise at the box office, collecting a roaring $53 million in its domestic opening weekend. The nearly silent thriller added $45.5 million internationally for a glob… [+4584 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Caroline Thayer",
            "title": "Olivia Culpo insisted that her wedding dress not 'exude sex in any way, shape, or form' - Fox News",
            "description": "The former Miss Universe says why she opted for a dress that did not \"exude sex\" and the importance of marrying NFL star Christian  in a church.",
            "url": "https://www.foxnews.com/entertainment/olivia-culpo-insisted-wedding-dress-not-exude-sex-any-way-shape-form",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/christian_mcaffrey_olivia_culpo.jpg",
            "publishedAt": "2024-06-30T14:50:00Z",
            "content": "Olivia Culpo has married her prince charming in NFL star Christian .\r\nThe duo, who got engaged last year after a few years of dating, married in a church in Watch Hill, Rhode Island, on  [+2394 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Lena H. Sun, Sarah Kaplan",
            "title": "Dengue fever is surging worldwide. The epidemic has reached the U.S. - The Washington Post",
            "description": "Climate change helped fuel an explosion of dengue cases in the Americas, including Puerto Rico, as mosquitoes multiply in warmer, wetter weather.",
            "url": "https://www.washingtonpost.com/health/2024/06/30/dengue-puerto-rico-mosquito-climate-change/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NYCGCBYE4YSDRHV6JYIJ7VUUB4.JPG&w=1440",
            "publishedAt": "2024-06-30T14:33:39Z",
            "content": "SAN JUAN, Puerto Rico The curly-haired girl came to   fever, aches and signs of dehydration,common indications of many childhood illnesses.But the 9-year-old pale and listless ben… [+15886 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motorsport.com"
            },
            "author": "Alex Kalinauckas",
            "title": "F1 Austrian GP: Russell inherits victory as = and Norris collide - Motorsport.com",
            "description": "Russell scores Mercedes' first win of 2024 as  and Norris collide while battling for the lead",
            "url": "https://www.motorsport.com/f1/news/f1-austrian-gp-russell-inherits-victory-as-verstappen-and-norris-collide/10629844/",
            "urlToImage": "https://cdn-5.motorsport.com/images/amp/Y99DWAqY/s6/george-russell-mercedes-amg-f1-3.jpg",
            "publishedAt": "2024-06-30T14:31:14Z",
            "content": "George Russell won an Austrian Grand Prix that was transformed dramatically when long-time leader Max  collided with long-time pursuer  Norris.\r\nThe Red Bull and  pair made cont… [+3747 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "POLITICO",
            "title": "Ex-DNC vice chair: Biden must be pushed to drop out - POLITICO",
            "description": null,
            "url": "https://www.politico.com/news/2024/06/30/ex-dnc-chair-biden-2024-elections-00165940",
            "urlToImage": null,
            "publishedAt": "2024-06-30T14:24:10Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Georg Szalai",
            "title": "Viggo Mortensen on Respecting Audiences, How Scripts Are Key “Unless I’m Broke,” New  Films - Hollywood Reporter",
            "description": "At the Karlovy Vary film festival, the star also discusses feminism and diversity, shares why Hollywood tends to \"over-explain things\" and the emotional screening of 'The Dead Don't Hurt' in Ukraine.",
            "url": "http://www.hollywoodreporter.com/movies/movie-news/viggo-mortensen-lord-of-the-rings-script-feminism-1235935628/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/Viggo-1.jpg?w=1024",
            "publishedAt": "2024-06-30T14:18:03Z",
            "content": "Viggo Mortensen seems tireless. On Friday night, he opened the 58th edition of the Karlovy Vary International Film Festival () in the Czech Republic with his feminist western The Dead Don’t Hurt… [+9299 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Should you still take multivitamins after this new study? - Fox News",
            "description": "Fox News medical contributor Dr. Nicole  joins ‘Fox & Friends Weekend’ to discuss the new study finding multivitamins do not decrease people’s risk of...",
            "url": "https://www.youtube.com/watch?v=NT7u072XPwo",
            "urlToImage": "https://i.ytimg.com/vi/NT7u072XPwo/maxresdefault.jpg",
            "publishedAt": "2024-06-30T14:00:15Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Daniel Kreps",
            "title": "Watch Zach Bryan Bring the 'Hawk Tuah' Girl Onstage at Nashville Concert - Rolling Stone",
            "description": "Zach Bryan's Nashville stadium show Saturday featured guests Kacey Musgraves and the viral \"Hawk Tuah\" girl.",
            "url": "http://www.rollingstone.com/music/music-country/zach-bryan-hawk-tuah-girl-kacey-musgraves-nashville-1235050385/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/06/bryanhawk.jpg?w=1600&h=900&crop=1",
            "publishedAt": "2024-06-30T13:03:04Z",
            "content": "From Springsteen to “Spit on that thing”: Zach Bryan’s  Time Tour has featured plenty of diverse onstage guest appearances, from rock gods to country stars to NFL quarterbacks to, now, interne… [+1284 chars]"
        }];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
        };
        console.log(this.articles);
    }

    render() {
        return (
            <div>
            
                {this.state.articles.map((article, index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                        <img
                            src={article.urlToImage || "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <a href={article.url} className="btn btn-primary">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default NewsItem;