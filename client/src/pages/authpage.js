// import React from 'react'
// import './auth.css'

export const Authpage = () => {
  return (
    <div className="container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in to Codepen</h3>
		<div className="card-text">

			<form>
            <form className='m-5' onSubmit={handleSubmit}>
            <h2 className='mx-auto'>Login</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">User Name</label>
                <input type="text" className="form-control w-3" id="exampleInputName1" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{
                    setPassword(e.target.value)}} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>	


				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<a href="#" style="float:right;font-size:12px;">Forgot password?</a>
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <a href="#">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>

  )
}
