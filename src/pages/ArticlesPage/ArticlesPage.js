import { useState } from 'react';
import { useNavigate } from 'react-router';
import './ArticlesPage.css';




const ArticlesPage = ({ articlesData }) => {

  const [subject, setsubject] = useState("")


  const navigate = useNavigate();





  return (

    <div>



      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Filter</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body fs-4">
          Subject
          <button onClick={() => { setsubject("Math") }} className="btn btn-light mt-3 inCanvasOff" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Math</button>
          <button onClick={() => { setsubject("History") }} className="btn btn-light mt-1 inCanvasOff" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">History</button>
          <button onClick={() => { setsubject("Chemistry") }} className="btn btn-light mt-1 inCanvasOff" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chemistry</button>
          <button onClick={() => { setsubject("Biology") }} className="btn btn-light mt-1 inCanvasOff" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Biology</button>
        </div>
      </div>


      <div className=' offcanvat'>
        <button className="btn btn-light fs-3 offcanvatBtn mt-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filter</button>
      </div>




      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <div className="containerzlk">








        {articlesData.map((element, key) => {


          if (element.subject == subject) {
            return (
              <div>
                <div className="post mt-5">
                  <div className="header_post">
                    <img src="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  </div>
                  <div className="body_post">
                    <div className="post_content">
                      <h1>{element.header}</h1>
                      <p onClick={() => navigate(`/ArticlesInto/${element.id}`)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                        dolorum ex exercitationem.</p>
                      <div className="container_infos">
                        <div className="postedBy">
                          <span>subject</span>
                          {element.subject}
                        </div>
                        <div className="container_tags">
                          <span>author</span>
                          <div className="tags">
                            <ul>
                              <li onClick={() => navigate(`/Profile/${element.id}`)}>{element.author} </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }
        })}

        {articlesData.map((element, key) => {


          if (!element.subject == subject) {
            return (
              <div>
                <div className="post mt-5">
                  <div className="header_post">
                    <img src="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  </div>
                  <div className="body_post">
                    <div className="post_content">
                      <h1>{element.header}</h1>
                      <p onClick={() => navigate(`/ArticlesInto/${element.id}`)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                        dolorum ex exercitationem.</p>
                      <div className="container_infos">
                        <div className="postedBy">
                          <span>subject</span>
                          {element.subject}
                        </div>
                        <div className="container_tags">
                          <span>author</span>
                          <div className="tags">
                            <ul>
                              <li onClick={() => navigate(`/Profile/${element.id}`)}>{element.author}</li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          }
        })}







      </div>

    </div>
  )
}

export default ArticlesPage