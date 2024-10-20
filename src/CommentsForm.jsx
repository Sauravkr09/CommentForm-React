import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {

  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      addNewComment(values);  // Add the new comment after form submission
    },
  });

  return (
    <div>
      <h3>Give a Comment!</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username"> Username</label>
        <input
          placeholder="Username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
      {formik.errors.username ? <p style={{color: "blue"}}>{formik.errors.username}</p> : null}


        <br /><br />
        <label htmlFor="remarks"> Remarks</label>
        <textarea
          value={formik.values.remarks}
          placeholder="Add few remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        />
        <br /><br />
        <label htmlFor="rating"> Rating</label>
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br /><br />
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}
