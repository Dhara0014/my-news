import {useState, useEffect} from 'react'
import MyNewsDetails from './MyNewsDetails';
import InfiniteScroll from 'react-infinite-scroll-component';
import MySpinner from './MySpinner';

const MyNews = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
      
    
    const capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
        
  
        const updateFun = async() => {
          setLoading(true);
          props.setProgress(30);
          const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`).then(res => res.json());
          props.setProgress(60);
          setLoading(false);
          setArticles(data.articles);
          setTotalResults(data.totalResults);
          props.setProgress(100);
          console.log(data);
        }

        useEffect(() => {
            updateFun();
            document.title = `${capitalizeFirstLetter(props.category)} - News | Daily-News`;
          },[]);
  
          const fetchMoreData = async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
            setPage(page + 1);
            let parseData = await fetch(url);
            let data = await parseData.json();
            setArticles(articles.concat(data.articles));
            setTotalResults(data.totalResults);
          }
  return (
    <div style={{marginTop: '92px', marginLeft: 'auto', width: '73%', marginRight:'20px'}}>
    
    <h1 className={` text-light py-2 rounded shadow` } style={{background: '#CC0000'}}>{capitalizeFirstLetter(props.category)}</h1> <hr className={`text-${props.mode === 'dark'?'white':'black'}`}/>
   

    <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    inverse={true} 
    hasMore={articles.length !== totalResults}
    loader={<MySpinner/>}
    >

        {!loading && <div className="container my-4">
        <div className="row">
        {articles.map((m) => {
          return (<div className="col md-4 my-2" key={m.title}>
          <MyNewsDetails mode={props.mode} title={m.title} description={m.description} img={m.urlToImage} read={m.url} date={new Date(m.publishedAt).toGMTString()} author={m.author} source={m.source.name}/>            
          </div>)
        })}        
        </div>
        </div>}
    </InfiniteScroll>
          
  
    
    </div>
  )
}

export default MyNews;