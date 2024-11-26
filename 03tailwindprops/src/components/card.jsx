import React from "react"


function Card(){
return(
    <div class="flex font-sans">
  <div class="flex-none w-48 relative">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEBAQEBAVFRAVEBIQDw8QEhAQFRUXFhUWFRUYHSggGBolGxMVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDQ0NDg8NDi0ZFRkrKysrLS0tKysrLTcrLTc3LSsrKysrKysrNys3KysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAwQCCAEFBwb/xABLEAACAQICBQYICQsBCQAAAAAAAQIDEQQhBRIxQVEGBxNhcYEiMpGhscHR8BQkNEJVcnOUsxYjM1KCkqKy0uHxQxVFU1RiY3SDk//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOi5V8oqWDoyqVJWssktspbklxYHcSxUFLUdSCm1dQc4qTWy+rttkSX6zU/lDpWeLrTr1rOU3knmowXixXZ6Wyg6jta7twu7AbfqSeSabW1JrI5NV+QfKepo7FdLTWtCS1a1K9lVp3zXVJbU/U2bN6G0rSxVGFfDzU6U1k96e+Mluknk0BdAAAAAAAAAAAAAAAAAAAAwqTSWYGbZ1+ldMUcNB1K9WFKC+dOSV3wXF9SPPuXfOhHDylQwijUrLKdSWdOnLgl8+XmXmPHNJ6UrYqbqYirOpLPwpO9uqK2RXUkgPWOUfPFBXhgqTqS2KpVvGPaoLwn32PMNPafxGLnrYmq52b1Y2UYx7IrI67DqyvbPM4qIDHat3fuONW63ZvLO1l1mGs81xRzVqJU0tRJ3b1/D1pK2xq+rbuTAhwz8PufqPpeTfKzFYCTeFq6sZtOdOcVOnNrJNxex7rppnzmEWV+PoRKpZ9mYHunJzngw9W0cZSlhp/8SF6lJ9q8aPn7T0fB4unWgqlGpCrTfizhJSi+9GpMzstBcocTg56+FrzpN+NFPWpztunB5S7dvBoDaoHwXN/zkU8e1QrxjQxdvBSb6Kvbb0d84y36jv1N2dvvQAAAAAAAAAAAAADhs8451OV/wAGp9DRlavUTSa/04bHLt3L+x9hym0zDC0J1ajtGKv1t7El1t2Xea0ab0pPFVp1qj8Ob2Xuox+bFdSXrYFGq7Xk83u7X6xUj4KXEwqyvNR6/RmWIxz7AFrX7EjCZJuZHNZFEVr++w7D/YnSYWeJdZRUK0aKp6jbm3GMm9a+WU+G4oLad7Q0jP4BVoZKn01GTWecpa71mtmt+air8FYg6RRRjHO77Euw5myanDwSjFowpIzmvQKUQM6VRwcZRbjJO8ZRbTjJZpp7mrGxfNvyrWkMNebXwmlaGIS+d+rUS4SSfepI1uk/CS4X89z6HkXyilo/FwrK7p+JXgvn0ZW1sv1llJdcbb2Bs4DCjVjOMZwalCSUoyWyUZK6a7mZkAAAAAAAAA4m7I5Ot09j40aM6k3qxjGUpPhFK7fkQHkPPHp7pKscNF+DDw6lt8tkF5LvvR5ks36C5pTHSr1alafjVJOTXBPYu5WXcVIesCth3rVG+CflbL8djKeAj474yt5P8l35oGPze8wM5bF2mCKITsaD+L1ftMP/ACVjr2tpepv4tP7aj+HWApJFqOwrRJqe8DiaETme44QEdbKSfv75klNbe0VY5xfWI7X1pAe7czGnOmwjw8neph3aN3m6E23DyPWj3I9CNcebjTfwTH0pydqVR9DW4alRpKT7JKLvwTNjiAAAAAAAAA2eW89GmtSgqEX4VWVnZ/6cbSl59Vd7PTcRO0WzW/nF0q8RjqmfgU30cP2fGfbrN+RAfMSZjfI5mYYh2j2oDPBR8Bdbk/KyzLYiOlG0YrqRJPYgMZrwURXLDWxFaZQmWo/Jpfb0fwqxWlsLS+TS+3o/h1gKcSamQE1HaBzLYjgymsu8xQEklkQxea7PWWLZdxJhNGyqUq1WMlagqTqQs9ZwnLVTjudnm+pNgQNbmbKcgtN/DMDRquWtUUejrcelh4Mm+3KX7RrVl2np/MbpnVr1sLJ+DVj0tNf9yGUku2L/AICD2cAAAAAAAHUcpcaqNCpUlkoxlJ9kU2/Qau1qjk3KXjSblL60nd+dnunPJpHo8G4J2lVlCmuxvWl/DGS7zwkDBkeLd2l2IlIZO9VLrAusSezvMW8yOcvV3IC23Yp1dpJnxv2kMiiSOwtJfF5cOmp/h1Pb5ipAtuVsNL7en+FU9+4CmyWkQPMmiwJJ/wBzFbTiDurrZu99xjLJ3d9qAtI7Dk/j503VoxcVHFU5UZ3TzbjJU1k9jnKKafE63Wz7iJ1HGSadpKzT4NPJ+YDFP3Z3PI/SDw+Nw9a9lGrDW+pJ6s/4ZMo6TS6WUo5Rm1Uj9Wota3c213FZoDbcHW8mtIfCMJQrb6lKnKX19VKS/eTOyIAAAHEjkjrysmB4hz16Q1sRSop5QjOcl1yerHyakvKecxR9Fzh4rpNIV3ui4QXZGKv/ABOR87SeYEa2kFL9M+pMsQ295XoL85MCzcwfv1GVzmErbV5gM47Lrbv4MgmvUS6mTs8vQzGoUIFyS+K9fTrzU37SnT2FyXyb/wB7/D9/OBQeRJDMwkZYfagMsJJ6qtuuvI7eokndrNN9ySRBQt4S4Slx35+snSfsTuwESKo80+pr38pLHg9pBWfr9QFqVVyhBNRWqpJSz1pJycrPO2V3a3EjiKLFN5sDYLmfxvSaMpxbu6M61J9S1ukiv3akT7U8p5h8X4GKo8JUai/aUoS/kierEAAACrpCVoPsLRR0rLwGBrBp6tr4mvL9atW/ndijF2ZLipXnJ8ZTflbK+9gZw2lek/Dl3E8VcgoK0pdwEyOW7W4eg4chOdlnuAkcv7mMiPC5p33ksijGmWpS+Lr/AMip5qdP+oqR3lmr8nj9vV/Dpf2IKjFJg5pICNzcZX3Pb1F2Msv8ZFSW0zoS1dvi7upgZPJ9e/fkR193ayWV9ytx6yvVlue5lFijILJsjpszqbb9QHpXMfitXHVIbqmHn5YTg/Q5HuJrpzTYnU0nhv8Ar6aD/apTa86RsWQAAAOs04/zbOzOq5Qfopdj9Ao1a1r58fWRR2syp+KuxGFLawM2siCllJ9xaa6vKVp5SvxXo/yBMV6m9bsvfzkmt1GEo++YE1I5jIiU2cxAke0mbfQR+2rPvcKS9XnIaizLM/k8ft6nnp0/6fOBV3CkzFM4vYDJmdLeQ6xlGoBZKtZZ24b+Mdq9Jk5t9Ri3x3AcwZLPYiJq23v4oli7oDuuQVfUx+ElwxFFfvS1fWbQmp/JuVsXQttWJwrX/wBoG2LA4AAAqaRo60GuotmFZZAaq8pNG/BcTVoJ3UJWi3k3BpSjfrtJeQ6tZH1XOnHU0lWUmldUWrtLLoor1M+WTAy6TItVtF1FRhXlBqlNtU5P51rptdV42K1KjKcowpq85yjCC4zk1GK8rRtDh+TeHWGp4WpRp1aNOnSp6tSEZxkqaSTae+6v2gasxOWjZ5ch9HfR+D+7UfYZfkPo76PwX3aj7ANXrGUFn78TZ9ciNHfR+C+60P6Tj8htHfR+D+7UfYBrLN3LMl8WvZ2+ESz3J9HHL34GyC5C6O+j8H92pewnfJPBanR/AsL0V9bo/g1HU1tmtq6tr9YGrisYyRs3LkJo5/7vwn3emvUcfkHo76Pwn3en7ANZGjJGzP5CaP8A+Qwf3el7DJchdHfR+D+70vYBrLYnr6PnTjTqSi+jqpunK3gtxbi1fitVmyq5CaN+jsJ93p+wk0vyYw9TCvDQoUoUkn0cIwSjBtt5Ldm2BrDKXoMISttL2m9HSw9edGSd4SaV98dq8xRYH0vNvo2OI0nhoT8VT6V7m+hi6kV+9CJs2a1c1GJUdLYVJp6zqx2rK9GobKgAAADQAEVTCwl40IS+tGLy7zqsXyTwNX9LgsLPrlh6Tflsd0APmcJyB0dSrQr0sJCFWnLWpuM6qjGW56mtqvvR9MkAAAAAAAAAAAAAAAAAB0OleRmBxNVVsRhYVaqjq3cqiTjdvOKaT2vNq5JheSOApfo8BhIdaw9K/lauzugBFQwsIeJThD6sIx9BKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        Classic Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
)
}

export default Card