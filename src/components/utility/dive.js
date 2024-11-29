// Copyright 2024 kmore
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

    
export async function fetchDiveReport(family, image, tag) {
    const queryParams = new URLSearchParams({ family, image, tag }).toString();
    const backend_url = `http://localhost:3000/api/dive/report?${queryParams}`;
    console.log(backend_url);
    try {
      const response = await fetch(backend_url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching fetchDiveReport data:', error);
      return [];
    }
}