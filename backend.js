
// Getting/Rendering blogs in html page

const addBlog = async (e) => {

  e.preventDefault()
  console.log('adding blog')
  const blogForm = document.querySelector('.blog-form')
  const submitBtn = document.querySelector('.submit-btn')
  const loader = document.querySelector('.popup-loader')


  loader.classList.add('active')

  const formData = new FormData(blogForm)

  formData.append("title", blogForm[0].value)
  formData.append("date", blogForm[1].value)
  formData.append("imgUrl", blogForm[2].value)
  formData.append("blogUrl", blogForm[3].value)
  formData.append("aboutText", blogForm[4].value)


  const url = "https://orchard-be-production.up.railway.app/create-blog"
  const options = {
    method: "POST",
    body: formData
  }
  console.log('data is: ', formData)
  try {
    if (blogForm.checkValidity()) {

      const response = await fetch(url, options)
      if (response.ok) {
        console.log(`Adding Blog Went Successfully `)
        window.location.pathname = "/create-blog.html"
      }
      else {
        console.log(`Error: Couldn't Add Blog Something Went Wrong ${response.status}, ${response.statusText}`)
        alert(`Error: Couldn't Add Blog Something Went Wrong Try Again later ${response.statusText}`)
      }
    } else {
      console.log("Make Sure All Inputs Are Filled")
      alert("Invalid Inputs, Make Sure All Inputs Are Filled")
    }
  }
  catch (error) {
    console.log(error)
  } finally {
    loader.classList.remove('active')
  }
}


const gettingBlogs = async () => {

  const loader = document.querySelector('.loader-wrapper')
  const url = "https://orchard-be-production.up.railway.app/blogs";
  loader.classList.add('active')

  try {
    const response = await fetch(url);

    if (response.ok) {

      const data = await response.json();
      // console.log(data.blogs);
      return data.blogs;

    }
    else {
      console.log(`Error Couldn't Fetch Blogs. Status: ${response.status}, ${response.statusText} `)
      alert(`Error Something Went Wrong. Status: ${response.status}, ${response.statusText} `)

    }

  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    loader.classList.remove('active')
  }
};

const renderBlogInHome = async () => {
  blog = await gettingBlogs();
  blog.reverse()
  blog.forEach((b, index) => {
    // console.log(index)

    element = `   
      <li>
      <div class="blog-card">

        <figure class="card-banner img-holder" style="--width: 1180; --height: 800;">
          <img src="${b.img}"
            width="1180" height="800" loading="lazy"
            alt="An image of ${b.title}" class="img-cover">

            <div class="card-badge">
              <ion-icon name="calendar-outline" role="img" class="md hydrated"
                aria-label="calendar outline"></ion-icon>

              <time class="time " datetime="2022-14-30">${b.date}</time>
            </div>
        </figure>

        <div class="card-content">

          <h3 class="h2">
            <a href="${b.blogUrl}"
              target="_blank" class="card-title">
              ${b.title}</a>
          </h3>

          <p class="card-text h3">
          ${b.aboutText}
          </p>

          <a href="${b.blogUrl}"
            target="_blank" class="card-link h3">Read More</a>
             <button class="delete btn btn-delete" onclick="deleteBlog(${b.id})"> Delete</button

        </div>

      </div>
    </li>                    
    `;

    element2 = `   
    <li>
          <div class="blog-card">
    
            <figure class="card-banner img-holder" style="--width: 1180; --height: 800;">
              <img src="${b.img}"
                width="1180" height="800" loading="lazy"
                alt="An image of ${b.title}" class="img-cover">
    
                <div class="card-badge">
                  <ion-icon name="calendar-outline" role="img" class="md hydrated"
                    aria-label="calendar outline"></ion-icon>
    
                  <time class="time " datetime="2022-14-30">${b.date}</time>
                </div>
            </figure>
    
            <div class="card-content">
    
              <h3 >
                <a href="${b.blogUrl}"
                  target="_blank" class="card-title">
                  ${b.title}</a>
              </h3>
    
              <p class="card-text ">
              ${b.aboutText}
              </p>
    
              <a href="${b.blogUrl}"
                target="_blank" class="card-link ">Read More</a>
            </div>
    
          </div>
        </li>                    
        `;

    if (index <= 2) {

      if (document.querySelector('.blog-list')) {

        document.querySelector('.blog-list').insertAdjacentHTML("beforeend", element2)
      }
    }
    else if (window.location.pathname === '/blog.html') {
      console.log('right page')
      document.querySelector('.blog-list').insertAdjacentHTML("beforeend", element2)
    }

    if (document.querySelector('.blog-list1')) {

      document.querySelector('.blog-list1').insertAdjacentHTML("beforeend", element)
    }


  })


};
renderBlogInHome();

// Delete Blogs
const deleteBlog = async (id) => {
  const loader = document.querySelector('.popup-loader')
  const url = `https://orchard-be-production.up.railway.app/delete-blog/${id}`;
  loader.classList.add('active')

  const options = {
    method: "DELETE",
  };
  try {
    const response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      console.log("Blog Was Deleted Successfully");
      window.location.pathname = "/create-blog.html"
    }
    else {
      console.log(`Error: Couldn't Delete Blog Something Went Wrong ${response.status}, ${response.statusText}`)
      alert(`Error: Couldn't Delete Blog Something Went Wrong Try Again later ${response.statusText}`)
    }
    console.log("Couldn't Delete..");
  } catch (Error) {
    console.log("Error: ", Error);
  } finally {
    loader.classList.remove('active')
  }
};

// function handleId(id) {
//   console.log(`this id ${id} `);
//   // deleteBlog(id);
//   deleteStaff(id)
// }

// Handle Staff add/delete/ update
const addStaff = async (event) => {
  event.preventDefault()

  const staffForm = document.querySelector('.staff-form')
  const loader = document.querySelector('.popup-loader')
  console.log(loader)
  loader.classList.add('active')

  const data = new FormData()

  data.append("name", staffForm[0].value)
  data.append("jobTitle", staffForm[1].value)
  data.append('imgFile', staffForm[2].files[0])
  data.append("aboutMe", staffForm[3].value)

  const url = "https://orchard-be-production.up.railway.app/add-staff"
  const options = {
    method: "POST",
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: data
  }
  console.log("Data", data)

  try {
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      console.log(`Staff Was Added Successfully `)
      window.location.pathname = "/create-blog.html"

    }
    else {
      console.log(`Error: Couldn't Add Staff Something Went Wrong ${response.status}, ${response.statusText}`)
      alert(`Error: Couldn't Add Staff Something Went Wrong Try Again later ${response.statusText}`)
    }
  }

  catch (Error) {
    console.log(Error)
  } finally {
    loader.classList.remove('active')
  }
}
const gettingStaff = async () => {


  const loader = document.querySelector('.loader-wrapper2')
  loader.classList.add('active')

  const url = "https://orchard-be-production.up.railway.app/staff";

  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log("Fetching Staff Went Successfully")
      const data = await response.json();
      return data.Staff;
    } else {
      console.log(`Error Couldn't Fetch Staff. Status: ${response.status}, ${response.statusText} `)
      alert(`Error Something Went Wrong Refresh The Page Or Try Again Later. Status: ${response.status}, ${response.statusText} `)

    }
  } catch (error) {
    console.log("Error: ", error);
  } finally {

    loader.classList.remove('active')
  }
};

const renderStaff = async () => {
  staff = await gettingStaff();
  // console.log(staff);
  staff.forEach((s) => {
    const element = `  
    <li>
  <div class="blog-card">
    <figure class="card-banner img-holder" style="--width: 1180; --height: 800">
      <img
        src="${s.img}"
        width="1180"
        height="800"
        loading="lazy"
        alt="An image of ${s.name}"
        class="img-cover"
      />

   
    </figure>

    <div class="card-content">
      <h1 class="h1">${s.name}</h1>
      <h3 class="h2">${s.jobTitle}</h3>

      <p class="card-text h3">${s.bio}</p>
      <div>
         <button class="delete btn btn-delete" onclick="deleteStaff(${s.id})">
        Delete
      </button>
      <button class="delete btn btn-update" onclick="updateStaff(${s.id})">
        Update
      </button>
      </div>
   
    </div>
  </div>
</li>
    `;

    const element2 = ` 
    <div class="card swiper-slide">
                              <div class="image-content">
                                  <span class="overlay"></span>
                                  <div class="card-image">
                                      <img src="${s.img}" alt="" class="card-img">
                                  </div>
                              </div>
                              <h2 class=" card-title"> ${s.name}</h2>
                              <p class="card-subtitle card-subtitle"> ${s.jobTitle}</p>
                              <div class="card-content">
                                  <p class="description my-text ">
                                      ${s.bio}
                                      
                                  </p>
                                  <button class="btn-more" onclick="toggleMore(this)">View bio</button>
                                  <ul class="card-social-list">
                                      <li>
                                          <a href="#" class="card-social-link">
                                              <ion-icon name="logo-facebook" role="img" class="md hydrated"
                                                  aria-label="logo facebook"></ion-icon>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="card-social-link">
                                              <ion-icon name="logo-twitter" role="img" class="md hydrated"
                                                  aria-label="logo twitter"></ion-icon>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="card-social-link">
                                              <ion-icon name="logo-instagram" role="img" class="md hydrated"
                                                  aria-label="logo instagram"></ion-icon>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          `
    if (document.getElementById('doctor-card') && s.jobTitle === "Dentist") { document.getElementById('doctor-card').insertAdjacentHTML("beforeend", element2); }
    else if (document.getElementById('staff-card')) { document.getElementById('staff-card').insertAdjacentHTML("beforeend", element2); }
    if (document
      .querySelector(".staff-list")
    ) {
      document
        .querySelector(".staff-list")
        .insertAdjacentHTML("beforeend", element);
    }
  });
};


renderStaff();

const updateStaff = async (id) => {
  const popUp = document.querySelector(".popup-form");
  const form = document.getElementById("update-staff-form");
  const updateBtn = document.querySelector(".update-staff");
  var imgAsFile = document.querySelector(".staff-img").files;
  const loader = document.querySelector('.popup-loader')


  loader.classList.add('active')
  popUp.classList.add("active");


  const staffList = await gettingStaff();

  const staff = staffList.find((item) => item.id === id);
  if (staff) { loader.classList.remove('active') }
  form[0].value = staff.name;
  form[1].value = staff.jobTitle;
  form[2].value = staff.bio;

  form[3].addEventListener("change", (e) => {
    console.log(e.target.files);
    imgAsFile = e.target.files[0];
  });

  updateBtn.onclick = async (e) => {
    // e.stopPropagation();
    loader.classList.add('active')

    var data = new FormData();
    data.append("name", form[0].value);
    data.append("jobTitle", form[1].value);
    data.append("about", form[2].value);
    data.append("img", imgAsFile);
    data.append("publicId", staff.publicId);

    console.log(...data);
    const url = `https://orchard-be-production.up.railway.app/update-staff/${id}`;
    const options = {
      method: "PATCH",
      headers: {
        // "Content-type": "application/json",
      },
      body: data,
    };
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        console.log("Updating Staff Went Successfully");
        window.location.pathname = "/create-blog.html"
      } else {
        console.log(`Couldn't Update Staff Something Went Wrong, ${response.statusText}`);
        alert(`Couldn't Update Staff Try Again Later, Error: ${response.statusText}`)
      }
    } catch (error) {
      console.log(error);
      throw new Error("Testing error");
    } finally {
      loader.classList.remove('active')
    }
  };
};
const deleteStaff = async (id) => {
  const loader = document.querySelector('.popup-loader')

  const url = `https://orchard-be-production.up.railway.app/delete-staff/${id}`;
  const options = {
    method: "DELETE",
  };
  try {
    loader.classList.add('active')
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("Deleting Staff Went Successfully ");
      window.location.pathname = "/create-blog.html"

    } else {
      console.log(`Couldn't Delete Staff ${response.statusText}`);
      alert(`Couldn't Delete Staff Try Again Later, Error: ${response.statusText}`)
    }
  } catch (error) {
    console.log(`Error ${error}`);
  } finally {
    loader.classList.remove("active")
  }
};

// Log in

var globToken = (localStorage.getItem('token'))
const checkUser = async (event) => {
  event.preventDefault()
  const form = document.querySelector('.form')
  const url = 'https://orchard-be-production.up.railway.app/login'
  const data = new FormData(form)
  console.log(data)

  const options = {
    method: "POST",
    credentials: "include",
    body: data
  }
  console.log(options)
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data)
      const beToken = data["Token"]
      localStorage.setItem("token", beToken)
      window.location.pathname = '/create-blog.html'
    }
    else {
      console.log("bad request")
      alert(`Wrong Username Or Password. `)
    }
  }
  catch (error) {
    console.log("Error", error)
    alert(`Login Failed, Check Your server: ${error}`)
  }
}
if (window.location.pathname === '/create-blog.html') {

  const authenticated = async () => {
    const url = 'https://orchard-be-production.up.railway.app/authenticated'
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Content-type": 'application/json'
      }
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        console.log("Authentication is True usr exist", response)
        // window.location = 'create-blog.html'
        return true
      }
      else {
        console.log('No user Found ', response)
        window.location = 'login.html'
        return false
      }
    }
    catch (error) {
      console.log(`Error occurred: ${error}`)
      window.location = 'login.html'
      return false
    }
  }
  authenticated();
  // console.log(authenticated())
  const logOut = async () => {
    console.log('Loginng Out')
    localStorage.removeItem('token')
    window.location = index.html
  }

  document.querySelector('.logout').addEventListener('click', logOut)
}

// handle eye show password 
const eye = document.getElementById('eye')

const changeType = (event) => {
  var isPassword = true
  var password = document.querySelector('.password')
  if (password.type === 'password') {
    password.setAttribute('type', 'text') 
  }
  else {
    console.log(password.type)
    password.setAttribute('type', 'password')
  }
  console.log(password.type)

}
eye.addEventListener('click', changeType)
// handle popUp

const popUp = document.querySelector('.popup-form')
const popUpForm = document.querySelector('staff-form')
const closePopUp = document.querySelector('.close')
if (popUp && closePopUp) {

  closePopUp.onclick = () => {
    popUp.classList.remove('active')
    console.log('popUp')
  }
  popUp.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target === popUp) {
      popUp.classList.remove('active')
      console.log('pop up closed')
    }
  })
}

