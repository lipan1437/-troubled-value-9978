// import { Box, Button, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

// export default function BookCard({book}) {
    
//   return (
//     <SimpleGrid style={{border:"1px solid teal"}} w={"100%"}  >
//       <Link to={`/books/${book.id}`}>
//         <Image src={book.image} alt="book_cover" w={"100%"} m={"auto"}/>
//       </Link>
//         <Heading as='h5' size='sm' color={"blue.400"}>Details: {book.book_name}</Heading>
//         <Heading as='h6' size='xs' > Name: {book.author}</Heading>
//         <Heading as='h6' size='xs'>Category: {book.category}</Heading>
//         <Heading as='h6' size='xs'>Price: {book.price}</Heading>
//         <Heading as='h6' size='xs'>Year of released: {book.release_year}</Heading>
//         <Link to={`/books/${book.id}/edit`}>
//            <Button colorScheme='blue' size='sm'>Update</Button>
//         </Link>
//     </SimpleGrid>
//   )
// }

export default function BookCard({book}){

  return(
    <DivWrapper>
    <div>
        <div className='image'>
          <img src={book.image} alt="" />
        </div>
        <div className='info'>
          <div className='info__title'>
            <p>{book.book_name}</p>
          </div>
          <div className='info__price'>
            <p>{book.price}</p>
            <p>{book.category}</p>
          </div>
          <div className='info__btn'>
            <button>
            <Link to={`/books/${book.id}`}>
              View Details
            </Link>
            </button>
            <p>{book.release_year}</p>
          </div>
        </div>
    </div>
    </DivWrapper>
  )
}

const DivWrapper = styled.div`
    padding:1%;
      .image{
        height:40vh;
        padding:5%;
        img{
          height:100%;
          width:100%;
        }
        :hover{
          padding:0%
        }
      }
      .info{
        height:16vh;
        border:1px solid blue;
        width:100%;
        padding:2%;
          &__title{
            display:flex;
            justify-content:center;
            align-item:center;
            p{
              color:#008BCF;
              font-weight:bold;
              font-size:17px;
            }
          }
          &__price{
            display:flex;
            padding:1% 2% 1% 2%;
            justify-content:space-between;
          }
          &__btn{
            display:flex;
            padding:0% 2% 0% 2%;
            justify-content:space-between;
            button{
              border:2px solid #008BCF;
              padding:3px 5px 3px 5px;
              border-radius:3px;
              color:#008BCF;
              : hover{
                background : #008BCF;
                color:white;
              }
            }
          }
      }
`