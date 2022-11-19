import React, {useState} from 'react';
import { Select, Typography, Row, Col, Card} from 'antd';
import { useGetCryptoNewsQuery} from '../Services/CryptonewsApi';
import { useGetCryptosQuery} from '../Services/CryptoApi';



const { Title } = Typography;

const demoImageUrl = 'https://i.ibb.co/Z11pcGG/cryptocurrency.png'

const { Option } = Select;


const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('"Cryptocurrency"');

    const {data} = useGetCryptosQuery(100);

    const { data : cryptoNews } = useGetCryptoNewsQuery( {newsCategory, count: simplified ?  9: 50} )
    
    if(!cryptoNews?.value) return 'Loading...'

    return (
        <Row gutter={ [ 2,2] }>

             {!simplified &&(
                
                    <Col span ={24}>
                    <Select 
                    showSearch 
                    className='select-news'
                    placeholder='Select a Crypto'
                    optionFilterProp='children'
                    onChange={(value) => {
                        setNewsCategory(value)
                        }    }
                    filterOption={(input, option)=> option.toLowerCase().indexOf(input.toLowerCase())>=0}
                    >
                    <Option value="CryptoCurrency">CryptoCurrency</Option>
                   {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
                   
                    </Select>
                </Col>
            ) } 
            { cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={24} lg={8} key={i}>
                        <Card hoverable className='news-card' style={{backgroundColor: "greenyellow"}}>
                            <a href={news.url} target="_blank" rel="noreferrer">
                            <div>
                                <div className="news-image-container" >
                               
                                <br/>
                                <img src={news?.image?.thumbnail?.contentUrl||demoImageUrl} alt="news" height="140px"   width="160px"/>
                                    <Title className="news-title" level={3}>{news.name}</Title>
                                        <br/>
                                    <p>

                                        {news.description>100?`${news.description.substring(0,100)}...`
                                        : news.description
                                        }

                                    </p>
                                        
                                </div>
                            </div>
                            </a>
                        </Card>
                    </Col>
            ))}
        </Row>
          
        
    )
}

export default News;
