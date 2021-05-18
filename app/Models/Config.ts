import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Config extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nickname: string

  @column()
  public mapa: string

  @column()
  public funcao: string

  @column()
  public resolucao: string

  @column()
  public hz: string

  @column()
  public sensibilidade: string

  @column()
  public dpi: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
