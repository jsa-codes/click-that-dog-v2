import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TrainingSessionForm = () => {
    
    
    return (
        <>
    <form>
    <fieldset>
      <legend>Today's Training Session</legend>
       
        <p>
        <label>Today's Date:<input type="date" name="birthDate"/></label>
        </p>
        <p>
        <label>
            Behavior: 
          <select name="behavior">
            <option>--None--</option>
            <option>Sit</option>
            <option>Down</option>
            <option>Place</option>
            <option>Hand Touch</option>
            <option>Shake</option>
            <option>Close</option>
            <option>Side</option>
            <option>Come</option>
            <option>Hand Signal for Sit</option>
            <option>Hand Signal for Down</option>
            <option>Go to your house</option>
            <option>Tug</option>
            <option>Get It</option>
            <option>Sit in Car</option>
            <option>Down in Car</option>
            <option>Close Down</option>
            <option>Side Down</option>
            <option>Watch Me</option>
            <option>Nail Trimming</option>
            <option>Walking on Leash</option>
            <option>Go Explore</option>
            <option>Find It</option>
          </select>
        </label>
      </p>
 
    <p>
        <label>Location Name: <input name="locationName" /></label>
      </p>
    
    <p>
        <label>
            Time Spent: 
          <select name="timeSpent">
            <option>--None--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
            <option>46</option>
            <option>47</option>
            <option>48</option>
            <option>49</option>
            <option>50</option>
            <option>51</option>
            <option>52</option>
            <option>53</option>
            <option>54</option>
            <option>55</option>
            <option>56</option>
            <option>57</option>
            <option>58</option>
            <option>59</option>
            <option>60</option>
            
            
          </select>
        </label>
      </p>
<p>
        <label>Treats Used:<input type="text" name="treatsUsed" /></label>
      </p>
        <p>
        <label>
          Additional Notes:
          <br />
          <textarea name="notes" cols="30" rows="10"></textarea>
        </label>
      </p>
 
<p>
        <button type="submit">Submit</button>
      </p>
 
 
     </fieldset>
  </form>
    </>
)
}