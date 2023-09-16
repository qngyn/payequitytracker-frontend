import Button from "./Button";
const SurveyForm = () => {
    const [info, setInfo] = useState({
        position: "", 
        salary: "", 
        benefits: "", 
        description: ""
    })

    return (
        <form>
            <div>
                <div>
                    <div>
                        <label htmlFor="position"> Position </label>
                        <input 
                            type="text"
                            id="position"
                            value={info.position}
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="salary"> Salary </label>
                        <input 
                            type="number"
                            id="salary"
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="benefits"> Benefits </label>
                        <input 
                            type="text"
                            id="benefits"
                            value={info.benefits}
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="description"> Job Description </label>
                        <input 
                            type="text"
                            id="description"
                            value={info.description}
                            required 
                        />
                    </div>
                </div>
                <div>
                    <Button> Submit </Button>
                </div>
            </div>
        </form>
    )

}

export default SurveyForm;