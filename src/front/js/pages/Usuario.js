import React from 'react'
import JorgePic from '/workspaces/VeganWorld/src/front/img/jorge.png'

export const Usuario = () => {
  return (

    <div>
      
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">Name</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Profile description</p>
                </div>
            <div className="overflow-hidden max-height-30vh">
                <div className="container px-5">
                <img src={JorgePic} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Add as Friend</button>
                <button type="button" className="btn btn-outline-warning btn-lg px-4">Send Message</button>
            </div>

            <div className="b-example-divider"></div>
            <hr className="featurette-divider"/>

            <h1 mt-5>FAVOURITES</h1>

            <div className="b-example-divider"></div>
            

            <div className="container marketing">


                <div className="row">
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="fw-normal">Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Success</span>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="fw-normal">Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Success</span>
                </div>
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <h2 className="fw-normal">Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                    <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Success</span>
                </div>
                </div>




                <hr className="featurette-divider"/>


                <div className="row mb-2">
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi"><use href="#chevron-right"></use></svg>
                    </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi"><use href="#chevron-right"></use></svg>
                    </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi"><use href="#chevron-right"></use></svg>
                    </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi"><use href="#chevron-right"></use></svg>
                    </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
                </div>
            </div>
                

                <hr className="featurette-divider"/>


                <div className="form-floating mt-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
                </div>
                <div className="form-floating mt-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
                </div>
                <div className="form-floating mt-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
                </div>
                <div className="form-floating mt-2">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
                </div>




                <hr className="featurette-divider"/>


                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">EDIT PROFILE</button>
                <button type="button" className="btn btn-danger btn-lg px-4">DELETE ACCOUNT</button>
                </div>



            </div>
            </div>























        </div>

    )

}
