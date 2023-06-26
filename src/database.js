import fs from 'node:fs/promisses'

export class Database {
  #database = {}

  async #persiste() {
    await fs.writeFile('db.json', JSON.stringify(this.#database))
  }
  select(table) {
    const data = this.#database[table] ?? []
    
    return data
  }
  
  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }
    this.#persiste()
    return data
  }
} 